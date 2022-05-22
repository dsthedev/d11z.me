const Profile = ({ profile }) => {
  if (profile) {
    return (
      <div className="flex flex-col">
        <span>
          <strong>Name:</strong> {profile.displayName}
        </span>
        <span>
          <strong>Email:</strong> {profile.email}
        </span>
        <span>
          <strong>Roles:</strong>{' '}
          {profile.roles.charAt(0).toUpperCase() + profile.roles.slice(1)}
        </span>
      </div>
    )
  } else {
    return <p>No User Info Found?</p>
  }
}

export default Profile
