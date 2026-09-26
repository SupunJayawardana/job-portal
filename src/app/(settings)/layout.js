import styles from "./settings.module.css";

export default function SettingsLayout({ children }) {
  return (
    <div className={styles.settingsWrapper}>
      {/* Optional Settings Section Header */}
      <div style={{ marginBottom: "1.5rem", borderBottom: "1px solid #334155", pb: "1rem" }}>
        <h2 style={{ color: "var(--profile-accent, #06b6d4)" }}>User Settings</h2>
      </div>

      {/* Render Settings Pages */}
      {children}
    </div>
  );
}