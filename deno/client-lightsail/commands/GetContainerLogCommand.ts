import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { GetContainerLogRequest, GetContainerLogResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetContainerLogCommand,
  serializeAws_json1_1GetContainerLogCommand,
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

export type GetContainerLogCommandInput = GetContainerLogRequest;
export type GetContainerLogCommandOutput = GetContainerLogResult & __MetadataBearer;

/**
 * <p>Returns the log events of a container of your Amazon Lightsail container service.</p>
 *
 *          <p>If your container service has more than one node (i.e., a scale greater than 1), then the
 *       log events that are returned for the specified container are merged from all nodes on your
 *       container service.</p>
 *
 *          <note>
 *             <p>Container logs are retained for a certain amount of time. For more information, see
 *           <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail
 *           endpoints and quotas</a> in the <i>AWS General Reference</i>.</p>
 *          </note>
 */
export class GetContainerLogCommand extends $Command<
  GetContainerLogCommandInput,
  GetContainerLogCommandOutput,
  LightsailClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetContainerLogCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetContainerLogCommandInput, GetContainerLogCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetContainerLogCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContainerLogRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetContainerLogResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetContainerLogCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetContainerLogCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetContainerLogCommandOutput> {
    return deserializeAws_json1_1GetContainerLogCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
