
import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient.ts";
import { DeleteFileSystemRequest, DeleteFileSystemResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteFileSystemCommand,
  serializeAws_json1_1DeleteFileSystemCommand,
} from "../protocols/Aws_json1_1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export type DeleteFileSystemCommandInput = DeleteFileSystemRequest;
export type DeleteFileSystemCommandOutput = DeleteFileSystemResponse & __MetadataBearer;

export class DeleteFileSystemCommand extends $Command<
  DeleteFileSystemCommandInput,
  DeleteFileSystemCommandOutput,
  FSxClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFileSystemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFileSystemCommandInput, DeleteFileSystemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeleteFileSystemRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFileSystemResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFileSystemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteFileSystemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFileSystemCommandOutput> {
    return deserializeAws_json1_1DeleteFileSystemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
