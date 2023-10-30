/**
 * Copyright 2013-2023 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

async function askForClientTheme({ control }) {
  if (control.existingProject && !this.options.askAnswered) return;

  const config = this.jhipsterConfigWithDefaults;
  await this.prompt(
    {
      type: 'list',
      name: 'clientTheme',
      when: () => ['angular', 'react', 'vue'].includes(config.clientFramework),
      message: 'This template use Ant Design as UI framework, choose a theme (https://ant.design/docs/react/customize-theme-cn)?',
      choices: async () => {
        return [
          {
            value: 'none',
            name: 'Ant Design',
          },
        ];
      },
      default: config.clientTheme,
    },
    this.config,
  );
}

export default askForClientTheme;
