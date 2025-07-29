// app/profile/layout.tsx
import ProfileWrapper from "./ProfileWrapper";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <ProfileWrapper>{children}</ProfileWrapper>
    </div>
  );
}
