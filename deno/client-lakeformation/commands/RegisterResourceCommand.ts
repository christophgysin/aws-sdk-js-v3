import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient.ts";
import { RegisterResourceRequest, RegisterResourceResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1RegisterResourceCommand,
  serializeAws_json1_1RegisterResourceCommand,
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

export interface RegisterResourceCommandInput extends RegisterResourceRequest {}
export interface RegisterResourceCommandOutput extends RegisterResourceResponse, __MetadataBearer {}

/**
 * <p>Registers the resource as managed by the Data Catalog.</p>
 *
 * 	        <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p>
 *
 *          <p>The following request registers a new location and gives AWS Lake Formation permission to use the service-linked role to access that location.</p>
 *
 *          <p>
 *             <code>ResourceArn = arn:aws:s3:::my-bucket
 * UseServiceLinkedRole = true</code>
 *          </p>
 *
 * 	        <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p>
 *
 *          <p>
 *             <code>arn:aws:iam::12345:role/my-data-access-role</code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, RegisterResourceCommand } from "../../client-lakeformation/mod.ts";
 * // const { LakeFormationClient, RegisterResourceCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new RegisterResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterResourceCommandInput} for command's `input` shape.
 * @see {@link RegisterResourceCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RegisterResourceCommand extends $Command<
  RegisterResourceCommandInput,
  RegisterResourceCommandOutput,
  LakeFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterResourceCommandInput, RegisterResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "RegisterResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterResourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterResourceCommandOutput> {
    return deserializeAws_json1_1RegisterResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
