import React, { useState } from 'react';
import { User, FileText, Mail, Lock, Edit } from 'lucide-react';
const Profile = () => {
        function Profile () {
  const [formData, setFormData] = useState({
    name: 'Hajar Nouby',
    title: 'Hajar Nouby UX/UI Designer',
    email: 'hajarnoubyer@gmail.com',
    location: 'Netherlands',
    postalCode: '****'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    console.log('Saving changes:', formData);
  };

  return (
    <div style={styles.profileSettings}>
      <h1 style={styles.pageTitle}>Profile Settings</h1>
      
      <div style={styles.settingsContainer}>
        <aside style={styles.sidebar}>
          <nav style={styles.navMenu}>
            <button style={{...styles.navItem, ...styles.navItemActive}}>
              <User size={18} />
              <span style={styles.navText}>Username</span>
            </button>
            <button style={styles.navItem}>
              <FileText size={18} />
              <span style={styles.navText}>About Me</span>
            </button>
            <button style={styles.navItem}>
              <Mail size={18} />
              <span style={styles.navText}>Contact Information</span>
            </button>
            <button style={styles.navItem}>
              <Lock size={18} />
              <span style={styles.navText}>Privacy Policy</span>
            </button>
          </nav>
        </aside>

        <main style={styles.content}>
          <div style={styles.profileHeader}>
            <div style={styles.avatarSection}>
              <div style={styles.avatar}>
                <User size={48} color="#666" />
              </div>
              <button style={styles.uploadBtn}>
                Upload Image <span style={styles.uploadIcon}>📷</span>
              </button>
            </div>
            <button style={styles.editBtn}>
              <Edit size={16} />
              <span style={styles.editText}>Edit</span>
            </button>
          </div>

          <div style={styles.profileForm}>
            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.formInput}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  style={styles.formInput}
                />
              </div>
            </div>

            <div style={styles.formGroupFull}>
              <label style={styles.label} htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.formInput}
              />
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  style={styles.formInput}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="postalCode">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  style={styles.formInput}
                />
              </div>
            </div>

            <div style={styles.formActions}>
              <button onClick={handleSave} style={styles.saveBtn}>
                Save Changed
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );

}
}
export default Profile ;