import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

import { getCsrfToken } from "next-auth/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";

import styles from "./Signin.module.css";
import { UnlockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import classNames from "classnames";

function AutoPassBtn({
  btnLabel,
  email,
  password,
  setStates,
}: {
  btnLabel: string;
  email: string;
  password: string;
  setStates: any;
}) {
  return (
    <Button
      onClick={() => {
        setStates.email(email);
        setStates.password(password);
      }}
      size={"sm"}
      variant={"solid"}
      rightIcon={<UnlockIcon />}
      backgroundColor={"hsl(var(--s)/0.5)"}
      _hover={{ backgroundColor: "hsl(var(--s)/0.8)" }}
    >
      {btnLabel}
    </Button>
  );
}

export default function SignIn({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const router = useRouter();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.container}>
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

      <div className={styles.fillForm}>
        <label>
          <p>Email</p>
          <InputGroup size="lg">
            <Input
              variant={"outline"}
              pr="4.5rem"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </InputGroup>
        </label>
        <label>
          <p>Password</p>
          <InputGroup size="lg">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <InputRightElement
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "3rem",
                marginRight: "0.5rem",
              }}
              width="3rem"
              className="clicky"
            >
              <Button size="lg" onClick={handleClick}>
                {!show ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </label>

        <Button
          isLoading={isLoading}
          className={classNames(styles.submitBtn, "clicky")}
          onClick={async () => {
            setIsLoading(true);
            try {
              const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
              });

              console.log("Printing result: ", res);

              if (res?.status !== 200) {
                toast({
                  title: "Wrong Email Or Password ",
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
              } else {
                router.push("/");
              }
            } catch (error) {
              console.error("Sign-in error:", error);
              toast({
                title: "An error occurred during sign-in",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            } finally {
              setIsLoading(false);
            }
          }}
        >
          Sign in
        </Button>

        <p>Click one of the 3 buttons below for free access :</p>
        <Flex gap={4}>
          <AutoPassBtn
            btnLabel={"Admin"}
            email={"admin@hogwards.edu"}
            password={"admin888"}
            setStates={{ email: setEmail, password: setPassword }}
          />
          <AutoPassBtn
            btnLabel={"Faculty"}
            email={"faculty@hogwards.edu"}
            password={"faculty888"}
            setStates={{ email: setEmail, password: setPassword }}
          />
          <AutoPassBtn
            btnLabel={"Student"}
            email={"student@hogwards.edu"}
            password={"student888"}
            setStates={{ email: setEmail, password: setPassword }}
          />
        </Flex>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    return {
      props: {
        csrfToken: await getCsrfToken(context) ?? undefined,
      },
    };
  } catch (error) {
    console.error("Error fetching CSRF token:", error);
    return {
      props: {
        csrfToken: undefined,
      },
    };
  }
}
