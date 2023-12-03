let LoginCount = 0;
let ProposedCount = 0;
// let CompletedCount = 0;
// let RejectedCount = 0;
let WithdrawnCount = 0;
// let Faculty_ProposesCount = 0;
let Faculty_ApprovedCount = 0;
let Faculty_RejectedCount = 0;
let Faculty_CompletedCount = 0;


const LoginCountMiddleware = (req, res, next) => {
    LoginCount++;
    next();
};

const ProposedCountMiddleware = (req, res, next) => {
    ProposedCount++;
    next();
};

// const CompletedCountMiddleware = (req, res, next) => {
//     CompletedCount++;
//     next();
// };

// const RejectedCountMiddleware = (req, res, next) => {
//     RejectedCount++;
//     next();
// };

const WithdrawnCountMiddleware = (req, res, next) => {
    WithdrawnCount++;
    next();
};

// const Faculty_ProposesCountMiddleware = (req, res, next) => {
//     Faculty_ProposesCount++;
//     next();
// };

const Faculty_ApprovedCountMiddleware = (req, res, next) => {
    Faculty_ApprovedCount++;
    next();
};

const Faculty_RejectedCountMiddleware = (req, res, next) => {
    Faculty_RejectedCount++;
    next();
};

const Faculty_CompletedCountMiddleware = (req, res, next) => {
    Faculty_CompletedCount++;
    next();
};



const getValue = () => {
    return {LoginCount, LoginCount, ProposedCount, WithdrawnCount, Faculty_ApprovedCount, Faculty_RejectedCount, Faculty_CompletedCount}
}

module.exports = {
    LoginCount,
    ProposedCount,
    // CompletedCount,
    // RejectedCount,
    WithdrawnCount,
    // Faculty_ProposesCount,
    Faculty_ApprovedCount,
    Faculty_RejectedCount,
    Faculty_CompletedCount,
    LoginCountMiddleware,
    ProposedCountMiddleware,
    // CompletedCountMiddleware,
    // RejectedCountMiddleware,
    WithdrawnCountMiddleware,
    // Faculty_ProposesCountMiddleware,
    Faculty_ApprovedCountMiddleware,
    Faculty_RejectedCountMiddleware,
    Faculty_CompletedCountMiddleware,
    getValue
};
