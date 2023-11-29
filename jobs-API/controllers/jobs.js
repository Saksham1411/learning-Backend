const Jobs = require('../models/Job');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');


const getAllJobs = async (req, res) => {
    const jobs = await Jobs.find({ createdBy: req.user.userId }).sort('createdAt');

    res.status(StatusCodes.OK).json({ count: jobs.length, jobs });

}
const getJobs = async (req, res) => {
    const { user: { userId }, params: { id: jobId } } = req;

    const job = await Jobs.findOne({ _id: jobId, createdBy: userId })

    if (!job) {
        throw new NotFoundError('job not found');
    }

    res.status(StatusCodes.OK).json(job);
}
const createJobs = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const job = await Jobs.create(req.body);
    res.status(StatusCodes.CREATED).send(job);
}
const updateJobs = async (req, res) => {
    const {
        body: { company, position },
        user: { userId },
        params: { id: jobId }
    } = req;

    if (company === '' || position === '') {
        throw new BadRequestError('company or position fields cannot be empty')
    }

    const job = await Jobs.findByIdAndUpdate({ _id: jobId, createdBy: userId }, req.body, { new: true, runValidators: true });
    if (!job) {
        throw new NotFoundError('Job for this id doesnt exist');
    }

    res.status(StatusCodes.OK).json({ job });
}
const deleteJobs = async (req, res) => {
    const { user: { userId }, params: { id: jobId } } = req;

    const job = await Jobs.findByIdAndRemove({ _id: jobId, createdBy: userId });

    if (!job) {
        throw new NotFoundError('Job for this id doesnt exist');
    }

    res.status(StatusCodes.OK).send('successfully deleted');

}

module.exports = {
    getAllJobs,
    getJobs,
    createJobs,
    updateJobs,
    deleteJobs
}