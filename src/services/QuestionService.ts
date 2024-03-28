import { prompt } from "inquirer";

export class QuestionService {
  async make() {
    const questions = [
      {
        type: "list",
        name: "type",
        message: "What type of endpoint do you want to test?",
        choices: ["RPC", "Atomic"],
        default: "React",
      },
      {
        type: "input",
        name: "endpoint",
        message: "What is the endpoint?",
        validate: (value: string) => {
          if (value.length) {
            return true;
          } else {
            return "Please enter a valid endpoint.";
          }
        },
      },
    ];

    const answers = await prompt(questions);

    return answers;
  }
}
