import initializeFx from "./initializeFx";



describe(
    "initializeFx",
    () => {
         it(
            "no arguments without error",
            () => {
                const initialized = initializeFx();
                expect(initialized).toBeTruthy();
            }
        )

    }
)