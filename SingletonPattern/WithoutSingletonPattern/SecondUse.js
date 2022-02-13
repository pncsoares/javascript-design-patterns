import FancyLogger from "./fancyLogger";
const logger = new FancyLogger();

export default function logSecondImplementation() {
    logger.printLogCount();
    logger.log('Second file');
    logger.printLogCount();
}