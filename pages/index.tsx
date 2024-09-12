import { useRouter } from "next/router";
import {
  Button,
  Card,
  CardBody,
  Stack,
} from "@chakra-ui/react";
import { MySession } from "../lib/types";

import styles from "./index.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";

export default function IndexPage() {
  const session = useSession();
  const sessionData = session.data as MySession;

  const router = useRouter();
  if (session.status === "authenticated") {
    router.push(`${sessionData?.user?.role}/Dashboard`);
  }

  // THE LANDING PAGE
  return (
    <Parallax
      pages={2}
      style={{
        backgroundImage: "url(/assets/image/bg.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ParallaxLayer offset={0} speed={0.5}>
        <div className={styles.heading}>
          <div className={styles.headerTxt}>Welcome to the</div>
          <div className={styles.appName}> School Sync</div>
          <div className={styles.icon}>
            <ArrowRightIcon />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.5}>
        <div className={styles.infoCard}>
          <Card
            direction={{ base: "column", sm: "row" }}
            variant="outline"
            className={styles.card}
          >
            <Stack>
              <CardBody className={styles.cardBody}>
                <div className={styles.imageWrapper}>
                  <Image
                    borderRadius="full"
                    src="/assets/image/boy.webp"
                    alt="Trio"
                    boxSize={{ base: "320px", lg: "500px" }}
                  />
                </div>
                <div className={styles.txtWrap}>
                  <div className={styles.txt}>
                    Streamline your school’s operations with our comprehensive ERP solution. Our platform is designed to make managing school activities simple and efficient. Dive into
                    <span className={styles.appNameTxt}> School Sync </span>
                     for a seamless experience where efficiency meets ease of use. Let’s enhance your educational journey together!
                  </div>
                  <div className={styles.btnPos}>
                    <Button
                      onClick={() => signIn()}
                      className={styles.btn}
                      backgroundColor={"hsl(var(--s))"}
                    >
                      Sign in
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Stack>
          </Card>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}
