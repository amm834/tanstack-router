import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId')({
    loader: async ({params}) => {
        console.log(params.postId)
        return {
            postId: params.postId
        }
    },
    component: () => <div>Hello /posts/$postId!</div>
})
