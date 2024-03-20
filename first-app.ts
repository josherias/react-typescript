// primitives

let username = "Josh"; //string

let age = 10; //num

let isValid = true; //boolean

let password: string | number = "abs";

// objects

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user: User;

user = {
  name: "Max",
  age: 10,
  isAdmin: false,
  id: 10,
};

// array
let hobbies: Array<string>;
hobbies = ["play", "swimming"];

// or
let tasks: string[];

let ids: number[];

ids = [1, 2, 3];

// TYPES OF FUNCTIONS

function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

function addTwo(a: number, b: number): void {
  const result = a + b;
}

// custom type
type AddFn = (a: number, b: number) => number;

type StringOrNum = string | number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 5, add);

//defining object types with interfaces
interface Credentials {
  username: string;
  password: string | number;
}

let creds: Credentials;

creds = {
  username: "Jo",
  password: "3294302490kksf",
};

class AuthCredentials implements Credentials {
  username: string;
  password: string | number;
  email: string;
}

function login(credentials: Credentials) {}

login(new AuthCredentials());

// merging types

type AppAdmin = {
  permissions: string[];
};

type AppUser = {
  username: string;
};

type AppAdminUser = AppAdmin & AppUser;

let appadmin: AppAdminUser;

appadmin = {
  permissions: [""],
  username: "",
};

// literal types

type Role = "admin" | "user" | "editor";

let role: Role;

role = "admin";
role = "user";
role = "editor";

function performAction(action: string | number, role: Role) {
  if (role == "admin" && typeof action === "string") {
  }
}

//generic types

let roles: Array<Role>;
roles = ["user", "admin"];

//custom generic type
type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: ["t"],
  add(data) {},
};

const numberStorage: DataStorage<number> = {
  storage: [1],
  add(data) {},
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge<{ name: string }, { age: number }>(
  { name: "Max" },
  { age: 10 }
);
