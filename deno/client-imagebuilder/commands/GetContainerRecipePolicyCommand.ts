import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient.ts";
import { GetContainerRecipePolicyRequest, GetContainerRecipePolicyResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetContainerRecipePolicyCommand,
  serializeAws_restJson1GetContainerRecipePolicyCommand,
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

export interface GetContainerRecipePolicyCommandInput extends GetContainerRecipePolicyRequest {}
export interface GetContainerRecipePolicyCommandOutput extends GetContainerRecipePolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the policy for a container recipe.</p>
 */
export class GetContainerRecipePolicyCommand extends $Command<
  GetContainerRecipePolicyCommandInput,
  GetContainerRecipePolicyCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetContainerRecipePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetContainerRecipePolicyCommandInput, GetContainerRecipePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "GetContainerRecipePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContainerRecipePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetContainerRecipePolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetContainerRecipePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetContainerRecipePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetContainerRecipePolicyCommandOutput> {
    return deserializeAws_restJson1GetContainerRecipePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
