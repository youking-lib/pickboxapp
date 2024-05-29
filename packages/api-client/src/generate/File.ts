/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { ContentType, HttpClient, RequestParams } from "./http-client";

export class File<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description AppendFileRoute
   *
   * @tags File
   * @name AppendFileRoute
   * @summary AppendFileRoute
   * @request POST:/file
   */
  appendFileRoute = (
    data: {
      key: string;
      hash: string;
      name: string;
      size: number;
      type: string;
      tokenId?: string | null;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        id: string;
        key: string;
        hash: string;
        name: string;
        size: number;
        type: string;
        createdAt: string;
        updatedAt: string;
        tokenId?: string | null;
      },
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "bad_request"
             */
            code: "bad_request";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#bad-request"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "unauthorized"
             */
            code: "unauthorized";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#unauthorized"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "forbidden"
             */
            code: "forbidden";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#forbidden"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "not_found"
             */
            code: "not_found";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#not-found"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "conflict"
             */
            code: "conflict";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#conflict"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "invite_expired"
             */
            code: "invite_expired";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#invite-expired"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "unprocessable_entity"
             */
            code: "unprocessable_entity";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#unprocessable-entity"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "rate_limit_exceeded"
             */
            code: "rate_limit_exceeded";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#rate-limit_exceeded"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "internal_server_error"
             */
            code: "internal_server_error";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#internal-server_error"
             */
            doc_url?: string;
          };
        }
    >({
      path: `/file`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description UploadPreSign
   *
   * @tags File
   * @name UploadPreSign
   * @summary UploadPreSign
   * @request POST:/file/upload-pre-sign
   */
  uploadPreSign = (
    data: {
      filename: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        url: string;
        key: string;
      },
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "bad_request"
             */
            code: "bad_request";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#bad-request"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "unauthorized"
             */
            code: "unauthorized";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#unauthorized"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "forbidden"
             */
            code: "forbidden";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#forbidden"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "not_found"
             */
            code: "not_found";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#not-found"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "conflict"
             */
            code: "conflict";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#conflict"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "invite_expired"
             */
            code: "invite_expired";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#invite-expired"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "unprocessable_entity"
             */
            code: "unprocessable_entity";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#unprocessable-entity"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "rate_limit_exceeded"
             */
            code: "rate_limit_exceeded";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#rate-limit_exceeded"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "internal_server_error"
             */
            code: "internal_server_error";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#internal-server_error"
             */
            doc_url?: string;
          };
        }
    >({
      path: `/file/upload-pre-sign`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description PreHash
   *
   * @tags File
   * @name PreHash
   * @summary PreHash
   * @request POST:/file/pre-hash
   */
  preHash = (
    data: {
      hash: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        key: string | null;
      },
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "bad_request"
             */
            code: "bad_request";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#bad-request"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "unauthorized"
             */
            code: "unauthorized";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#unauthorized"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "forbidden"
             */
            code: "forbidden";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#forbidden"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "not_found"
             */
            code: "not_found";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#not-found"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "conflict"
             */
            code: "conflict";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#conflict"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "invite_expired"
             */
            code: "invite_expired";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#invite-expired"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "unprocessable_entity"
             */
            code: "unprocessable_entity";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#unprocessable-entity"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "rate_limit_exceeded"
             */
            code: "rate_limit_exceeded";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#rate-limit_exceeded"
             */
            doc_url?: string;
          };
        }
      | {
          error: {
            /**
             * A short code indicating the error code returned.
             * @example "internal_server_error"
             */
            code: "internal_server_error";
            /**
             * A human readable explanation of what went wrong.
             * @example "The requested resource was not found."
             */
            message: string;
            /**
             * A link to our documentation with more details about this error code
             * @example "https://pickbox.app/docs/api-reference/errors#internal-server_error"
             */
            doc_url?: string;
          };
        }
    >({
      path: `/file/pre-hash`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
