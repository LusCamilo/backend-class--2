import { it, expect } from "vitest";
import { MakeUser } from "./make-user";
import { CreateUser } from "../../domain/services/create-user";

it("should created a User", () => {
  const newUser = MakeUser();

  expect(typeof newUser.name).toBe("string");
  expect(typeof newUser.email).toBe("string");
  expect(typeof newUser.phoneNumber).toBe("string");
  expect(typeof newUser.id).toBe("string");
});

it("should created a specific User", () => {

  const userData = {
    name: "Lucas",
    email: "lucas@gmail.com",
    phoneNumber: "1191234-5678",
  };


  const newUser = new CreateUser().execute({
    ...userData,
  });

  expect(newUser.name).toBe("Lucas");
  expect(newUser.email).toBe("lucas@gmail.com");
  expect(newUser.phoneNumber).toBe("1191234-5678");
});