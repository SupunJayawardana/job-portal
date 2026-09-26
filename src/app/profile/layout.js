import styles from "./profile.module.css";

export default function ProfileLayout({ children }) {
  return (
    <div className={styles.profileWrapper}>
      {/* Optional Profile Section Header */}
      <div style={{ marginBottom: "1.5rem", borderBottom: "1px solid #334155", pb: "1rem" }}>
        <h2 style={{ color: "var(--profile-accent, #06b6d4)" }}>User Profile Dashboard</h2>
      </div>

      {/* Render Profile Pages */}
      {children}
    </div>
  );
}