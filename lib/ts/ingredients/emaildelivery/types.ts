/* Copyright (c) 2021, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
import OverrideableBuilder from "supertokens-js-override";

export type EmailDeliveryInterface<T> = {
    sendEmail: (input: T & { tenantId: string; userContext: any }) => Promise<void>;
};

/**
 * config class parameter when parent Recipe create a new EmailDeliveryIngredient object via constructor
 */
export interface TypeInput<T> {
    service?: EmailDeliveryInterface<T>;
    override?: (
        originalImplementation: EmailDeliveryInterface<T>,
        builder: OverrideableBuilder<EmailDeliveryInterface<T>>
    ) => EmailDeliveryInterface<T>;
}

export interface TypeInputWithService<T> {
    service: EmailDeliveryInterface<T>;
    override?: (
        originalImplementation: EmailDeliveryInterface<T>,
        builder: OverrideableBuilder<EmailDeliveryInterface<T>>
    ) => EmailDeliveryInterface<T>;
}
