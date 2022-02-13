import logger from "./fancyLogger";

export default function logSecondImplementation() {
    logger.printLogCount();
    logger.log('Second file');
    logger.printLogCount();
}