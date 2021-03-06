# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.8.0](https://github.com/AuroraDAO/datastream-client-js/compare/v1.6.9...v1.8.0) (2019-07-22)


### Features

* add subscription to users ([#2](https://github.com/AuroraDAO/datastream-client-js/issues/2)) ([3d6d495](https://github.com/AuroraDAO/datastream-client-js/commit/3d6d495))
* resend handshake on key/token change ([b989fbd](https://github.com/AuroraDAO/datastream-client-js/commit/b989fbd))





# [1.7.0](https://github.com/AuroraDAO/datastream-client-js/compare/v1.6.9...v1.7.0) (2019-07-01)

**Note:** Version bump only for package @auroradao/datastream-connection





## [1.6.9](https://github.com/AuroraDAO/datastream-client-js/compare/v1.6.8...v1.6.9) (2019-04-18)


### Bug Fixes

* refactor of connectors to send socket value ([9032285](https://github.com/AuroraDAO/datastream-client-js/commit/9032285))





## [1.6.8](https://github.com/AuroraDAO/datastream-client-js/compare/v1.6.7...v1.6.8) (2019-04-18)


### Bug Fixes

* back to close on closed or closing ([b192a77](https://github.com/AuroraDAO/datastream-client-js/commit/b192a77))





## [1.6.6](https://github.com/AuroraDAO/datastream-client-js/compare/v1.6.5...v1.6.6) (2019-04-18)


### Bug Fixes

* more web connector shimminess ([1065d5d](https://github.com/AuroraDAO/datastream-client-js/commit/1065d5d))





## [1.6.5](https://github.com/AuroraDAO/datastream-client-js/compare/v1.6.4...v1.6.5) (2019-04-18)


### Bug Fixes

* attempt for better fix for browser reconnect ([5398769](https://github.com/AuroraDAO/datastream-client-js/commit/5398769))





## [1.6.4](https://github.com/AuroraDAO/datastream-client-js/compare/v1.6.3...v1.6.4) (2019-04-18)


### Bug Fixes

* handle reconnect() request so we dont schedule twice ([9b0ef0e](https://github.com/AuroraDAO/datastream-client-js/commit/9b0ef0e))





## [1.6.3](https://github.com/AuroraDAO/datastream-client-js/compare/v1.6.2...v1.6.3) (2019-04-18)


### Bug Fixes

* reconnect if connected or handshaked ([aae03d2](https://github.com/AuroraDAO/datastream-client-js/commit/aae03d2))





## [1.6.2](https://github.com/AuroraDAO/datastream-client-js/compare/v1.6.1...v1.6.2) (2019-04-18)


### Bug Fixes

* only reconnect if handshaked when connection.reconnect() is called ([ea5a54c](https://github.com/AuroraDAO/datastream-client-js/commit/ea5a54c))





## [1.6.1](https://github.com/AuroraDAO/datastream-client-js/compare/v1.6.0...v1.6.1) (2019-04-18)


### Bug Fixes

* use NORMAL for all closure codes ([2326ae3](https://github.com/AuroraDAO/datastream-client-js/commit/2326ae3))





# [1.6.0](https://github.com/AuroraDAO/datastream-client-js/compare/v1.5.0...v1.6.0) (2019-04-17)


### Features

* allow token config and setters for key/token ([94fe260](https://github.com/AuroraDAO/datastream-client-js/commit/94fe260))
* upgrade to typescript 3.4 ([feee265](https://github.com/AuroraDAO/datastream-client-js/commit/feee265))





# [1.5.0](https://github.com/AuroraDAO/datastream-client-js/compare/v1.4.1...v1.5.0) (2019-04-08)


### Features

* update task-handler dependency ([76d38cd](https://github.com/AuroraDAO/datastream-client-js/commit/76d38cd))





## [1.4.1](https://github.com/AuroraDAO/datastream-client-js/compare/v1.4.0...v1.4.1) (2019-03-27)


### Bug Fixes

* fix case when error is standard style string ([30254de](https://github.com/AuroraDAO/datastream-client-js/commit/30254de))





# [1.4.0](https://github.com/AuroraDAO/datastream-client-js/compare/v1.3.2...v1.4.0) (2019-03-26)


### Features

* update task-handler and dev dependencies ([873d217](https://github.com/AuroraDAO/datastream-client-js/commit/873d217))





## [1.3.2](https://github.com/AuroraDAO/datastream-client-js/compare/v1.3.1...v1.3.2) (2019-03-25)


### Bug Fixes

* fixes for buffer of undefined error ([b572560](https://github.com/AuroraDAO/datastream-client-js/commit/b572560))





## [1.3.1](https://github.com/AuroraDAO/datastream-client-js/compare/v1.3.0...v1.3.1) (2019-03-20)

**Note:** Version bump only for package @auroradao/datastream-connection





# [1.3.0](https://github.com/AuroraDAO/datastream-client-js/compare/v1.2.2...v1.3.0) (2019-03-20)


### Features

* change to eslint from tslint, enforce new eslint rules ([204d166](https://github.com/AuroraDAO/datastream-client-js/commit/204d166))
* handle binary types in ws-connector ([02553c6](https://github.com/AuroraDAO/datastream-client-js/commit/02553c6))





## [1.2.2](https://github.com/AuroraDAO/datastream-client-js/compare/v1.2.1...v1.2.2) (2019-03-12)

**Note:** Version bump only for package @auroradao/datastream-connection

# [1.2.0](https://github.com/AuroraDAO/datastream-client-js/compare/v1.1.3...v1.2.0) (2019-03-12)

### Bug Fixes

- bind socket methods in websocket connectors ([2f5fd16](https://github.com/AuroraDAO/datastream-client-js/commit/2f5fd16))

### Features

- client-side ping error catching and reporting ([b66aca0](https://github.com/AuroraDAO/datastream-client-js/commit/b66aca0))

## [1.1.3](https://github.com/AuroraDAO/datastream-client-js/compare/v1.1.3-alpha.0...v1.1.3) (2019-03-11)

### Bug Fixes

- dont defer auto connect when enabled to prevent socket not defined error when sending synchronously ([173ec92](https://github.com/AuroraDAO/datastream-client-js/commit/173ec92))

## [1.1.3-alpha.0](https://github.com/AuroraDAO/datastream-client-js/compare/v1.1.2...v1.1.3-alpha.0) (2019-02-16)

**Note:** Version bump only for package @auroradao/datastream-connection

## [1.1.2](https://github.com/AuroraDAO/datastream-client-js/compare/v1.1.1...v1.1.2) (2019-02-11)

**Note:** Version bump only for package @auroradao/datastream-connection

## [1.1.1](https://github.com/AuroraDAO/datastream-client-js/compare/v1.1.0...v1.1.1) (2019-02-10)

**Note:** Version bump only for package @auroradao/datastream-connection

# 1.1.0 (2019-02-10)

**Note:** Version bump only for package @auroradao/datastream-connection
