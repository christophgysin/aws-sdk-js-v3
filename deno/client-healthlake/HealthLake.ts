import { HealthLakeClient } from "./HealthLakeClient.ts";
import {
  CreateFHIRDatastoreCommand,
  CreateFHIRDatastoreCommandInput,
  CreateFHIRDatastoreCommandOutput,
} from "./commands/CreateFHIRDatastoreCommand.ts";
import {
  DeleteFHIRDatastoreCommand,
  DeleteFHIRDatastoreCommandInput,
  DeleteFHIRDatastoreCommandOutput,
} from "./commands/DeleteFHIRDatastoreCommand.ts";
import {
  DescribeFHIRDatastoreCommand,
  DescribeFHIRDatastoreCommandInput,
  DescribeFHIRDatastoreCommandOutput,
} from "./commands/DescribeFHIRDatastoreCommand.ts";
import {
  DescribeFHIRExportJobCommand,
  DescribeFHIRExportJobCommandInput,
  DescribeFHIRExportJobCommandOutput,
} from "./commands/DescribeFHIRExportJobCommand.ts";
import {
  DescribeFHIRImportJobCommand,
  DescribeFHIRImportJobCommandInput,
  DescribeFHIRImportJobCommandOutput,
} from "./commands/DescribeFHIRImportJobCommand.ts";
import {
  ListFHIRDatastoresCommand,
  ListFHIRDatastoresCommandInput,
  ListFHIRDatastoresCommandOutput,
} from "./commands/ListFHIRDatastoresCommand.ts";
import {
  StartFHIRExportJobCommand,
  StartFHIRExportJobCommandInput,
  StartFHIRExportJobCommandOutput,
} from "./commands/StartFHIRExportJobCommand.ts";
import {
  StartFHIRImportJobCommand,
  StartFHIRImportJobCommandInput,
  StartFHIRImportJobCommandOutput,
} from "./commands/StartFHIRImportJobCommand.ts";
import { HttpHandlerOptions as __HttpHandlerOptions } from "../types/mod.ts";

/**
 * <p>Amazon HealthLake is a HIPAA eligibile service that allows customers to store,
 *          transform, query, and analyze their FHIR-formatted data in a consistent fashion in the cloud.</p>
 */
export class HealthLake extends HealthLakeClient {
  /**
   * <p>Creates a Data Store that can ingest and export FHIR formatted data.</p>
   */
  public createFHIRDatastore(
    args: CreateFHIRDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFHIRDatastoreCommandOutput>;
  public createFHIRDatastore(
    args: CreateFHIRDatastoreCommandInput,
    cb: (err: any, data?: CreateFHIRDatastoreCommandOutput) => void
  ): void;
  public createFHIRDatastore(
    args: CreateFHIRDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFHIRDatastoreCommandOutput) => void
  ): void;
  public createFHIRDatastore(
    args: CreateFHIRDatastoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFHIRDatastoreCommandOutput) => void),
    cb?: (err: any, data?: CreateFHIRDatastoreCommandOutput) => void
  ): Promise<CreateFHIRDatastoreCommandOutput> | void {
    const command = new CreateFHIRDatastoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a Data Store. </p>
   */
  public deleteFHIRDatastore(
    args: DeleteFHIRDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFHIRDatastoreCommandOutput>;
  public deleteFHIRDatastore(
    args: DeleteFHIRDatastoreCommandInput,
    cb: (err: any, data?: DeleteFHIRDatastoreCommandOutput) => void
  ): void;
  public deleteFHIRDatastore(
    args: DeleteFHIRDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFHIRDatastoreCommandOutput) => void
  ): void;
  public deleteFHIRDatastore(
    args: DeleteFHIRDatastoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFHIRDatastoreCommandOutput) => void),
    cb?: (err: any, data?: DeleteFHIRDatastoreCommandOutput) => void
  ): Promise<DeleteFHIRDatastoreCommandOutput> | void {
    const command = new DeleteFHIRDatastoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the properties associated with the FHIR Data Store, including the Data Store ID,
   *          Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and
   *          Data Store endpoint.</p>
   */
  public describeFHIRDatastore(
    args: DescribeFHIRDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFHIRDatastoreCommandOutput>;
  public describeFHIRDatastore(
    args: DescribeFHIRDatastoreCommandInput,
    cb: (err: any, data?: DescribeFHIRDatastoreCommandOutput) => void
  ): void;
  public describeFHIRDatastore(
    args: DescribeFHIRDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFHIRDatastoreCommandOutput) => void
  ): void;
  public describeFHIRDatastore(
    args: DescribeFHIRDatastoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFHIRDatastoreCommandOutput) => void),
    cb?: (err: any, data?: DescribeFHIRDatastoreCommandOutput) => void
  ): Promise<DescribeFHIRDatastoreCommandOutput> | void {
    const command = new DescribeFHIRDatastoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.</p>
   */
  public describeFHIRExportJob(
    args: DescribeFHIRExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFHIRExportJobCommandOutput>;
  public describeFHIRExportJob(
    args: DescribeFHIRExportJobCommandInput,
    cb: (err: any, data?: DescribeFHIRExportJobCommandOutput) => void
  ): void;
  public describeFHIRExportJob(
    args: DescribeFHIRExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFHIRExportJobCommandOutput) => void
  ): void;
  public describeFHIRExportJob(
    args: DescribeFHIRExportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFHIRExportJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeFHIRExportJobCommandOutput) => void
  ): Promise<DescribeFHIRExportJobCommandOutput> | void {
    const command = new DescribeFHIRExportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job.</p>
   */
  public describeFHIRImportJob(
    args: DescribeFHIRImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFHIRImportJobCommandOutput>;
  public describeFHIRImportJob(
    args: DescribeFHIRImportJobCommandInput,
    cb: (err: any, data?: DescribeFHIRImportJobCommandOutput) => void
  ): void;
  public describeFHIRImportJob(
    args: DescribeFHIRImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFHIRImportJobCommandOutput) => void
  ): void;
  public describeFHIRImportJob(
    args: DescribeFHIRImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFHIRImportJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeFHIRImportJobCommandOutput) => void
  ): Promise<DescribeFHIRImportJobCommandOutput> | void {
    const command = new DescribeFHIRImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store
   *          status.</p>
   */
  public listFHIRDatastores(
    args: ListFHIRDatastoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFHIRDatastoresCommandOutput>;
  public listFHIRDatastores(
    args: ListFHIRDatastoresCommandInput,
    cb: (err: any, data?: ListFHIRDatastoresCommandOutput) => void
  ): void;
  public listFHIRDatastores(
    args: ListFHIRDatastoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFHIRDatastoresCommandOutput) => void
  ): void;
  public listFHIRDatastores(
    args: ListFHIRDatastoresCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFHIRDatastoresCommandOutput) => void),
    cb?: (err: any, data?: ListFHIRDatastoresCommandOutput) => void
  ): Promise<ListFHIRDatastoresCommandOutput> | void {
    const command = new ListFHIRDatastoresCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Begins a FHIR export job.</p>
   */
  public startFHIRExportJob(
    args: StartFHIRExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFHIRExportJobCommandOutput>;
  public startFHIRExportJob(
    args: StartFHIRExportJobCommandInput,
    cb: (err: any, data?: StartFHIRExportJobCommandOutput) => void
  ): void;
  public startFHIRExportJob(
    args: StartFHIRExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFHIRExportJobCommandOutput) => void
  ): void;
  public startFHIRExportJob(
    args: StartFHIRExportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartFHIRExportJobCommandOutput) => void),
    cb?: (err: any, data?: StartFHIRExportJobCommandOutput) => void
  ): Promise<StartFHIRExportJobCommandOutput> | void {
    const command = new StartFHIRExportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Begins a FHIR Import job.</p>
   */
  public startFHIRImportJob(
    args: StartFHIRImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFHIRImportJobCommandOutput>;
  public startFHIRImportJob(
    args: StartFHIRImportJobCommandInput,
    cb: (err: any, data?: StartFHIRImportJobCommandOutput) => void
  ): void;
  public startFHIRImportJob(
    args: StartFHIRImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFHIRImportJobCommandOutput) => void
  ): void;
  public startFHIRImportJob(
    args: StartFHIRImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartFHIRImportJobCommandOutput) => void),
    cb?: (err: any, data?: StartFHIRImportJobCommandOutput) => void
  ): Promise<StartFHIRImportJobCommandOutput> | void {
    const command = new StartFHIRImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
