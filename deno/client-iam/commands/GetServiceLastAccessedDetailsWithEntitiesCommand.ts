
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import {
  GetServiceLastAccessedDetailsWithEntitiesRequest,
  GetServiceLastAccessedDetailsWithEntitiesResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand,
  serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand,
} from "../protocols/Aws_query.ts";
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

export type GetServiceLastAccessedDetailsWithEntitiesCommandInput = GetServiceLastAccessedDetailsWithEntitiesRequest;
export type GetServiceLastAccessedDetailsWithEntitiesCommandOutput = GetServiceLastAccessedDetailsWithEntitiesResponse &
  __MetadataBearer;

export class GetServiceLastAccessedDetailsWithEntitiesCommand extends $Command<
  GetServiceLastAccessedDetailsWithEntitiesCommandInput,
  GetServiceLastAccessedDetailsWithEntitiesCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetServiceLastAccessedDetailsWithEntitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    GetServiceLastAccessedDetailsWithEntitiesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetServiceLastAccessedDetailsWithEntitiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetServiceLastAccessedDetailsWithEntitiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetServiceLastAccessedDetailsWithEntitiesCommandOutput> {
    return deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
