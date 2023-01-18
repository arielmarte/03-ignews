import Stripe from "stripe";
import { version } from "../../package.json";

export const stripe = new Stripe(
  //'sk_test_51MPnANCDsmZdymbFAq5SKDJZVQgotVeF7WKJeHZJldwH735hqIqUqZWTWptX0tO6pCdsJHNd9N5ynrw3gw1k8MLU004wyfsaxB',
  process.env.STRIPE_API_KEY!,
   {
  apiVersion: "2022-11-15",
  appInfo: {
    name: "Ignews",
    version
  }
}
);