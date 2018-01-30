import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {PostCommentForPullRequest} from '../model/PostCommentForPullRequest';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PostCommentForPullRequestInput} from '../types/PostCommentForPullRequestInput';
import {PostCommentForPullRequestOutput} from '../types/PostCommentForPullRequestOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class PostCommentForPullRequestCommand implements __aws_types.Command<
    InputTypesUnion,
    PostCommentForPullRequestInput,
    OutputTypesUnion,
    PostCommentForPullRequestOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        PostCommentForPullRequestInput,
        PostCommentForPullRequestOutput,
        _stream.Readable
    >();

    constructor(readonly input: PostCommentForPullRequestInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<PostCommentForPullRequestInput, PostCommentForPullRequestOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PostCommentForPullRequest
        };

        return stack.resolve(
            handler<PostCommentForPullRequestInput, PostCommentForPullRequestOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}