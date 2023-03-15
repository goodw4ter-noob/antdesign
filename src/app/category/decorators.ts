interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

@CreatedAt
class UserService implements IUserService {
  users = 1000;

  getUsersInDatabase(): number {
      return this.users;
  }

}

function nullUser(target: Function) {
  target.prototype.users = 0;
}

function threeUserAdvanced<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
      users = 3;
  }
}

function setUsers(users: number) {
  return (target: Function) => {
      target.prototype.users = users;
  }
}

function CreatedAt<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
      createdAt = new Date();
  }
}

type createdAtType = {
  createdAt: Date;
}

console.log((new UserService() as IUserService & createdAtType).createdAt);
