type SectionEdgeFadeProps = {
  top?: boolean;
  bottom?: boolean;
};

export function SectionEdgeFade({ top, bottom }: SectionEdgeFadeProps) {
  return (
    <>
      {top ? (
        <div
          className="section-edge-fade-top pointer-events-none absolute inset-x-0 top-0 z-[5] h-24 sm:h-28"
          aria-hidden
        />
      ) : null}
      {bottom ? (
        <div
          className="section-edge-fade-bottom pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-24 sm:h-28"
          aria-hidden
        />
      ) : null}
    </>
  );
}
