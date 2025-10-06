// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuIndicator,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
//     NavigationMenuViewport,
//   } from "@/components/ui/navigation-menu"
//   import Link from "next/link"
//   import classes from './navbar.module.css'

//   export default function Navbar () {
//     return (
//         <NavigationMenu className={classes.navMenu}>
//     <NavigationMenuList className={classes.navList}>
//     <NavigationMenuItem className={classes.navListItem}>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className={classes.navListItemLink}>
//               Search
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//         <NavigationMenuItem className={classes.navListItem}>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className={classes.navListItemLink}>
//               Favourites 
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//         <NavigationMenuItem className={classes.navListItem}>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className={classes.navListItemLink}>
//               Account
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//     </NavigationMenuList>
//     </NavigationMenu>
//     )
//   }
  import classes from './navbar.module.css'

export default function Navbar () {
  return (
    <div className={classes.navContainer}>
    <div className={classes.navMenu}>
      <div className={classes.navList}>
        <div className={classes.navListItem}>
          <a href='/docs' className={classes.navListItemText}>Search</a>
        </div>
        <div className={classes.navListItem}>
          <a href='/docs' className={classes.navListItemText}>Favourites</a>
        </div>
        <div className={classes.navListItem}>
          <a href='/docs' className={classes.navListItemText}>Account</a>
        </div>
      </div>
    </div>
    </div>
  )
}