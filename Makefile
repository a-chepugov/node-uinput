NVM_PATH = $(HOME)/.nvm/nvm.sh

run:
	@source ${NVM_PATH} && \
	nvm use 20 && \
	npm run start:development

test:
	@source ${NVM_PATH} && \
	nvm use 20 && \
	npm test


