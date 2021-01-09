import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient.ts";
import { AddTagsToStreamInput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AddTagsToStreamCommand,
  serializeAws_json1_1AddTagsToStreamCommand,
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

export type AddTagsToStreamCommandInput = AddTagsToStreamInput;
export type AddTagsToStreamCommandOutput = __MetadataBearer;

/**
 * <p>Adds or updates tags for the specified Kinesis data stream. Each time you invoke
 *             this operation, you can specify up to 10 tags. If you want to add more than 10 tags to
 *             your stream, you can invoke this operation multiple times. In total, each stream can
 *             have up to 50 tags.</p>
 *         <p>If tags have already been assigned to the stream, <code>AddTagsToStream</code>
 *             overwrites any existing tags that correspond to the specified tag keys.</p>
 *         <p>
 *             <a>AddTagsToStream</a> has a limit of five transactions per second per
 *             account.</p>
 */
export class AddTagsToStreamCommand extends $Command<
  AddTagsToStreamCommandInput,
  AddTagsToStreamCommandOutput,
  KinesisClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddTagsToStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddTagsToStreamCommandInput, AddTagsToStreamCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "AddTagsToStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddTagsToStreamInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddTagsToStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddTagsToStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddTagsToStreamCommandOutput> {
    return deserializeAws_json1_1AddTagsToStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
