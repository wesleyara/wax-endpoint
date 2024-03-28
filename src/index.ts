import { AtomicService } from "./services/AtomicService";
import { QuestionService } from "./services/QuestionService";
import { RPCService } from "./services/RPCService";

(async () => {
  const atomicService = new AtomicService();
  const rpcService = new RPCService();
  const questionService = new QuestionService();

  const { type, endpoint } = await questionService.make();

  if (type === "RPC") {
    return await rpcService.test(endpoint.trim());
  }

  return atomicService.test(endpoint.trim());
})();
