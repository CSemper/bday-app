/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the WorkspaceCumulativeStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The SID of the Workspace
 */
declare function WorkspaceCumulativeStatisticsList(version: V1, workspaceSid: string): WorkspaceCumulativeStatisticsListInstance;

/**
 * Options to pass to fetch
 *
 * @property endDate - Only include usage that occurred on or before this date
 * @property minutes - Only calculate statistics since this many minutes in the past
 * @property splitByWaitTime - A comma separated list of values that describes the thresholds to calculate statistics on
 * @property startDate - Only calculate statistics from on or after this date
 * @property taskChannel - Only calculate cumulative statistics on this TaskChannel
 */
interface WorkspaceCumulativeStatisticsInstanceFetchOptions {
  endDate?: Date;
  minutes?: number;
  splitByWaitTime?: string;
  startDate?: Date;
  taskChannel?: string;
}

interface WorkspaceCumulativeStatisticsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkspaceCumulativeStatisticsContext;
  /**
   * Constructs a workspace_cumulative_statistics
   */
  get(): WorkspaceCumulativeStatisticsContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface WorkspaceCumulativeStatisticsPayload extends WorkspaceCumulativeStatisticsResource, Page.TwilioResponsePayload {
}

interface WorkspaceCumulativeStatisticsResource {
  account_sid: string;
  avg_task_acceptance_time: number;
  end_time: Date;
  reservations_accepted: number;
  reservations_canceled: number;
  reservations_created: number;
  reservations_rejected: number;
  reservations_rescinded: number;
  reservations_timed_out: number;
  split_by_wait_time: object;
  start_time: Date;
  tasks_canceled: number;
  tasks_completed: number;
  tasks_created: number;
  tasks_deleted: number;
  tasks_moved: number;
  tasks_timed_out_in_workflow: number;
  url: string;
  wait_duration_until_accepted: object;
  wait_duration_until_canceled: object;
  workspace_sid: string;
}

interface WorkspaceCumulativeStatisticsSolution {
  workspaceSid?: string;
}


declare class WorkspaceCumulativeStatisticsContext {
  /**
   * Initialize the WorkspaceCumulativeStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The SID of the Workspace to fetch
   */
  constructor(version: V1, workspaceSid: string);

  /**
   * fetch a WorkspaceCumulativeStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WorkspaceCumulativeStatisticsInstance) => any): Promise<WorkspaceCumulativeStatisticsInstance>;
  /**
   * fetch a WorkspaceCumulativeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkspaceCumulativeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkspaceCumulativeStatisticsInstance) => any): Promise<WorkspaceCumulativeStatisticsInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class WorkspaceCumulativeStatisticsInstance extends SerializableClass {
  /**
   * Initialize the WorkspaceCumulativeStatisticsContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The SID of the Workspace
   */
  constructor(version: V1, payload: WorkspaceCumulativeStatisticsPayload, workspaceSid: string);

  private _proxy: WorkspaceCumulativeStatisticsContext;
  accountSid: string;
  avgTaskAcceptanceTime: number;
  endTime: Date;
  /**
   * fetch a WorkspaceCumulativeStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WorkspaceCumulativeStatisticsInstance) => any): Promise<WorkspaceCumulativeStatisticsInstance>;
  /**
   * fetch a WorkspaceCumulativeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkspaceCumulativeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkspaceCumulativeStatisticsInstance) => any): Promise<WorkspaceCumulativeStatisticsInstance>;
  reservationsAccepted: number;
  reservationsCanceled: number;
  reservationsCreated: number;
  reservationsRejected: number;
  reservationsRescinded: number;
  reservationsTimedOut: number;
  splitByWaitTime: any;
  startTime: Date;
  tasksCanceled: number;
  tasksCompleted: number;
  tasksCreated: number;
  tasksDeleted: number;
  tasksMoved: number;
  tasksTimedOutInWorkflow: number;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
  waitDurationUntilAccepted: any;
  waitDurationUntilCanceled: any;
  workspaceSid: string;
}


declare class WorkspaceCumulativeStatisticsPage extends Page<V1, WorkspaceCumulativeStatisticsPayload, WorkspaceCumulativeStatisticsResource, WorkspaceCumulativeStatisticsInstance> {
  /**
   * Initialize the WorkspaceCumulativeStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WorkspaceCumulativeStatisticsSolution);

  /**
   * Build an instance of WorkspaceCumulativeStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkspaceCumulativeStatisticsPayload): WorkspaceCumulativeStatisticsInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { WorkspaceCumulativeStatisticsContext, WorkspaceCumulativeStatisticsInstance, WorkspaceCumulativeStatisticsInstanceFetchOptions, WorkspaceCumulativeStatisticsList, WorkspaceCumulativeStatisticsListInstance, WorkspaceCumulativeStatisticsPage, WorkspaceCumulativeStatisticsPayload, WorkspaceCumulativeStatisticsResource, WorkspaceCumulativeStatisticsSolution }