import { ReactQueryProvider } from './reactQueryProvider'

const Providers = ({ children }: { children: React.ReactNode }) => {
	return <ReactQueryProvider>{children}</ReactQueryProvider>
}

export default Providers
