import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class ErrorMiddleware implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost): void;
}