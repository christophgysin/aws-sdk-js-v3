import {
  KinesisVideoSignalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoSignalingClient.ts";
import { SendAlexaOfferToMasterRequest, SendAlexaOfferToMasterResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1SendAlexaOfferToMasterCommand,
  serializeAws_restJson1SendAlexaOfferToMasterCommand,
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

export interface SendAlexaOfferToMasterCommandInput extends SendAlexaOfferToMasterRequest {}
export interface SendAlexaOfferToMasterCommandOutput extends SendAlexaOfferToMasterResponse, __MetadataBearer {}

/**
 * <p>This API allows you to connect WebRTC-enabled devices with Alexa display devices. When
 *             invoked, it sends the Alexa Session Description Protocol (SDP) offer to the master peer.
 *             The offer is delivered as soon as the master is connected to the specified signaling
 *             channel. This API returns the SDP answer from the connected master. If the master is not
 *             connected to the signaling channel, redelivery requests are made until the message
 *             expires.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoSignalingClient, SendAlexaOfferToMasterCommand } from "../../client-kinesis-video-signaling/mod.ts";
 * // const { KinesisVideoSignalingClient, SendAlexaOfferToMasterCommand } = require("@aws-sdk/client-kinesis-video-signaling"); // CommonJS import
 * const client = new KinesisVideoSignalingClient(config);
 * const command = new SendAlexaOfferToMasterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendAlexaOfferToMasterCommandInput} for command's `input` shape.
 * @see {@link SendAlexaOfferToMasterCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoSignalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SendAlexaOfferToMasterCommand extends $Command<
  SendAlexaOfferToMasterCommandInput,
  SendAlexaOfferToMasterCommandOutput,
  KinesisVideoSignalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendAlexaOfferToMasterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoSignalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendAlexaOfferToMasterCommandInput, SendAlexaOfferToMasterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoSignalingClient";
    const commandName = "SendAlexaOfferToMasterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendAlexaOfferToMasterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendAlexaOfferToMasterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendAlexaOfferToMasterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendAlexaOfferToMasterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendAlexaOfferToMasterCommandOutput> {
    return deserializeAws_restJson1SendAlexaOfferToMasterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
