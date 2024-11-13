import { useState } from 'react'
import Logo from './Logo'
import Search from './Search'
import Fevorite from './Favorite'
import FevoriteListModal from './FavoriteListModal'

export default function Header() {
	const [showFavModal, setShowFavModal]= useState(false);

  return (
    <>
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
		<nav className="container flex items-center justify-between py-6">
			<Logo />

			<div className="flex items-center gap-4 relative">
				<Search />
				<Fevorite onShow={() => setShowFavModal(!showFavModal)} />
                {showFavModal && <FevoriteListModal />}
				
				

			</div>
		</nav>
	</header>
    </>
  )
}
