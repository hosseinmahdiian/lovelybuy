const Random = () => {
  let randomNumber = 1000 + Math.floor(Math.random() * (9999 - 1000));
  return randomNumber;
};

const sendSMS = (mobile) => {
  if (!!mobile) {
    console.log({
      severity: "error",
      summary: " شماره را وارد کنید  .",
    });
  } else if (mobile.length < 11) {
   console.log({
     severity: "error",
     summary: " شماره را به درستی وارد کنید  .",
   });
  } else {
    // setDisplay(true);
    const Code = Random();
    setCode(Code);
    const data = {
      Mobile: form.mobile,
      TemplateId: 312572,
      Parameters: [
        {
          Name: "Code",
          Value: Code,
        },
      ],
    };
    // service.sendSms(data).then((result) => {
    //   if (result.status === 1) {
    //     setInvalidSMS(false);
    //     setTimer(90);
    //     setResendSMS(false);
    //     clearInterval(intervalId);
    //     startTimer();
    //   } else {
    //     console.log("شماره را به درستی وارد کنید");
    //   }
    // });
  }
};
