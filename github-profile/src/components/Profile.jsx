function Profile({ profile }) {
    return (
        <div className="profile">
            <img className="avatar" src={profile.avatar_url} alt={profile.login} />
            <h2>{profile.name || profile.login}</h2>
            <p className="bio">{profile.bio}</p>
            <p><strong>Localisation :</strong> {profile.location}</p>
            <p><strong>Dépôts publics :</strong> {profile.public_repos}</p>
            <p><strong>Abonnés :</strong> {profile.followers}</p>
            <p><strong>Abonnements :</strong> {profile.following}</p>
            <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
                Voir le profil GitHub
            </a>
        </div>
    )
}

export default Profile