
import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { DeleteFacetRequest, DeleteFacetResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteFacetCommand,
  serializeAws_restJson1DeleteFacetCommand,
} from "../protocols/Aws_restJson1.ts";
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

export type DeleteFacetCommandInput = DeleteFacetRequest;
export type DeleteFacetCommandOutput = DeleteFacetResponse & __MetadataBearer;

export class DeleteFacetCommand extends $Command<
  DeleteFacetCommandInput,
  DeleteFacetCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFacetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFacetCommandInput, DeleteFacetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "DeleteFacetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFacetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFacetResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFacetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteFacetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFacetCommandOutput> {
    return deserializeAws_restJson1DeleteFacetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
