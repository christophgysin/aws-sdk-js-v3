import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient.ts";
import { DescribeOperatingSystemsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeOperatingSystemsCommand,
  serializeAws_json1_1DescribeOperatingSystemsCommand,
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

export interface DescribeOperatingSystemsCommandInput {}
export interface DescribeOperatingSystemsCommandOutput extends DescribeOperatingSystemsResponse, __MetadataBearer {}

/**
 * <p>Describes the operating systems that are supported by AWS OpsWorks Stacks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeOperatingSystemsCommand } from "../../client-opsworks/mod.ts";
 * // const { OpsWorksClient, DescribeOperatingSystemsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeOperatingSystemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOperatingSystemsCommandInput} for command's `input` shape.
 * @see {@link DescribeOperatingSystemsCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeOperatingSystemsCommand extends $Command<
  DescribeOperatingSystemsCommandInput,
  DescribeOperatingSystemsCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeOperatingSystemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOperatingSystemsCommandInput, DescribeOperatingSystemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DescribeOperatingSystemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: DescribeOperatingSystemsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeOperatingSystemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeOperatingSystemsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeOperatingSystemsCommandOutput> {
    return deserializeAws_json1_1DescribeOperatingSystemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
