import { Resolver, Mutation, Arg, Int } from 'type-graphql';

@Resolver()
export class MovieResolver {
	@Mutation(() => Boolean)
	createMovie(@Arg('title', () => String) title: string, @Arg('minutes', () => Int) minutes: number) {
		console.log(title, minutes);
		return true;
	}
}
