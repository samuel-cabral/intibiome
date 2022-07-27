type LogoProps = {
  styles: {
    readonly [key: string]: string;
  };
};

export function Logo({ styles }: LogoProps) {
  return (
    <div className={styles.logo}>
      <img src="/images/logos/logo.png" alt="intibiome" />
    </div>
  );
}
