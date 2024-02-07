type Props = { type: string; children: string; className: string };

export default function Title({ type, children, className }: Props) {
  switch (type) {
    case "h1":
      return (
        <h1
          className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ${className}`}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl ${className}`}
        >
          {children}
        </h2>
      );
    default:
      return (
        <h3
          className={`text-xl font-bold tracking-tight text-gray-900 sm:text-4xl ${className}`}
        >
          {children}
        </h3>
      );
  }
}
