import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {GetCommit} from '../model/GetCommit';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetCommitInput} from '../types/GetCommitInput';
import {GetCommitOutput} from '../types/GetCommitOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class GetCommitCommand implements __aws_types.Command<
    InputTypesUnion,
    GetCommitInput,
    OutputTypesUnion,
    GetCommitOutput,
    CodeCommitResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetCommitInput,
        GetCommitOutput,
        ReadableStream
    >();

    constructor(readonly input: GetCommitInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<GetCommitInput, GetCommitOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetCommit
        };

        return stack.resolve(
            handler<GetCommitInput, GetCommitOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}