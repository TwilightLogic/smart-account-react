import HeroPage from "./pages/HeroPage"
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react"
import chakraTheme from "@chakra-ui/theme"

const {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner,
  Stack,
  IconButton,
  Divider,
  Badge,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  useMultiStyleConfig,

  TabPanel,
} = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    Avatar,
    AvatarBadge,
    AvatarGroup,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Spinner,
    Stack,
    IconButton,
    Divider,
    Badge,
    Icon,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useMultiStyleConfig,
  },
})

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <HeroPage />
    </ChakraBaseProvider>
  )
}

export default App
