
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient.ts";
import { AbortVaultLockInput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1AbortVaultLockCommand,
  serializeAws_restJson1AbortVaultLockCommand,
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

export type AbortVaultLockCommandInput = AbortVaultLockInput;
export type AbortVaultLockCommandOutput = __MetadataBearer;

export class AbortVaultLockCommand extends $Command<
  AbortVaultLockCommandInput,
  AbortVaultLockCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AbortVaultLockCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AbortVaultLockCommandInput, AbortVaultLockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: AbortVaultLockInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AbortVaultLockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AbortVaultLockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AbortVaultLockCommandOutput> {
    return deserializeAws_restJson1AbortVaultLockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
