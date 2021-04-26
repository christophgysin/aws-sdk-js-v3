import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient.ts";
import { DisassociateS3ResourcesRequest, DisassociateS3ResourcesResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DisassociateS3ResourcesCommand,
  serializeAws_json1_1DisassociateS3ResourcesCommand,
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

export interface DisassociateS3ResourcesCommandInput extends DisassociateS3ResourcesRequest {}
export interface DisassociateS3ResourcesCommandOutput extends DisassociateS3ResourcesResult, __MetadataBearer {}

/**
 * <p>Removes specified S3 resources from being monitored by Amazon Macie Classic. If
 *       memberAccountId isn't specified, the action removes specified S3 resources from Macie Classic
 *       for the current Macie Classic administrator account. If memberAccountId is specified, the action removes specified
 *       S3 resources from Macie Classic for the specified member account.</p>
 */
export class DisassociateS3ResourcesCommand extends $Command<
  DisassociateS3ResourcesCommandInput,
  DisassociateS3ResourcesCommandOutput,
  MacieClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateS3ResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MacieClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateS3ResourcesCommandInput, DisassociateS3ResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MacieClient";
    const commandName = "DisassociateS3ResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateS3ResourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateS3ResourcesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateS3ResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateS3ResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateS3ResourcesCommandOutput> {
    return deserializeAws_json1_1DisassociateS3ResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
