class Logger {
  log(msg: string): void {
    console.log('logger: ' + msg)
  }
}


class UserService {
  constructor(private logger: Logger) {}

  createUser(name: string) {
    this.logger.log(`Create user: ${name}`);
  }
}


const us = new UserService(new Logger())


us.createUser('dima dyakov')